import request, { gql } from "graphql-request";

const MASTER_URL = `https://api-ap-northeast-1.hygraph.com/v2/clno8e8ii4wwn01uj1b7i331n/master`;

export async function getCarsList() {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        seat
        updatedAt
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
}

export async function getStoreLocations() {
  const query = gql`
    query storelocation {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
}
