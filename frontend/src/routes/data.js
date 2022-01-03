import ReactTable from "../Components/Graph/ReactTable";
import CoinListClass from "../Components/Graph/CoinListClass";
import { useMemo, useEffect, useState } from "react";
import faker from "faker/locale/ko";

faker.seed(100);
function Home() {
  const columns = useMemo(
    () => [
      {
        accessor: "name",
        Header: "Name",
      },
      {
        accessor: "email",
        Header: "Email",
      },
      {
        accessor: "phone",
        Header: "Phone",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      Array(53)
        .fill()
        .map(() => ({
          name: faker.name.lastName() + faker.name.firstName(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
        })),
    []
  );
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>This is Table</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <CoinListClass />
                  </div>
                </div>
              </div>
            </div>
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <ReactTable columns={columns} data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
