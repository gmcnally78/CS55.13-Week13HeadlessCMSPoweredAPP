import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllCIds, getCData } from '../../lib/cdata';

export async function getStaticProps({ params }) {
  const itemData = await getCData(params.cid);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllCIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.make}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.model}</h6>
          <p className="card-text">{itemData.year}</p>
          <p className="card-text">{itemData.color}</p>
        </div>
      </article>
    </Layout>
  );
}