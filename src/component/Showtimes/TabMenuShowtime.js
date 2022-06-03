import { Tabs, Radio, Space } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default class TabMenuShowtimes extends React.Component {
  renderHeThongRap = () => {
    return this.props.listRapChieu?.map((htr, index) => {
      return (
        <TabPane
          tab={
            <div>
              <img src={htr.logo} width={50} height={50} />
            </div>
          }
          key={index}
        >
          {htr.lstCumRap.map((cumRap, index) => {
            return (
              <div key={index}>
                <div className="d-flex flex-row mt-2 ml-2">
                  <div>
                    <img src="https://picsum.photos/50/50" alt="movie" />
                  </div>
                  <div className="ml-2">
                    <p>{cumRap.tenCumRap}</p>
                    <p>{cumRap.diaChi}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </TabPane>
      );
    });
  };

  render() {
    return (
      <>
        <Tabs tabPosition={"left"}>{this.renderHeThongRap()}</Tabs>
      </>
    );
  }
}
