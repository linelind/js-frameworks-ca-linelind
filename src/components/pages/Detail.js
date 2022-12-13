import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadcrumbNav from "../layout/Breadcrumb";
import { API } from "../../constants/api";
import moment from "moment";

function Detail() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history("/");
  }

  const URL = API + "wp/v2/posts/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(URL);

          if (response.ok) {
            const json = await response.json();
            setDetail(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [URL]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  const date = detail.date;
  const formatDate = moment(date).format("YYYY");

  return (
    <>
      <BreadcrumbNav />

      <div className='playContainer'>
        <h1>{detail.title.rendered}</h1>
        <p className='detailYear'>Written in {formatDate}</p>
        <p dangerouslySetInnerHTML={{ __html: detail.content.rendered }} />
      </div>
    </>
  );
}

export default Detail;
