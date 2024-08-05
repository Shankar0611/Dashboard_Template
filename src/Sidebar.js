import { faDropbox } from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBasketShopping,
  faBell,
  faBellConcierge,
  faBurger,
  faCaretDown,
  faCaretUp,
  faChartSimple,
  faChevronRight,
  faClipboardCheck,
  faCommentDollar,
  faEnvelope,
  faGear,
  faHouse,
  faLocationCrosshairs,
  faMagnifyingGlass,
  faRightFromBracket,
  faStar,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Chart } from "chart.js/auto";
import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import Avatar1 from "./Utility/Images/Avatar1.jpg";
import Avatar2 from "./Utility/Images/Avatar2.png";
import Avatar3 from "./Utility/Images/Avatar3.jpg";
import Avatar4 from "./Utility/Images/Avatar4.jpg";
import Avatar5 from "./Utility/Images/Avatar5.jpg";
import Avatar6 from "./Utility/Images/Avatar6.jpg";
import Avatar7 from "./Utility/Images/Avatar7.jpg";
import Avatar8 from "./Utility/Images/Avatar8.jpg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Sidebar() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const headers = [
    { id: 1, name: "Customer" },
    { id: 2, name: "Order No" },
    { id: 3, name: "Amount" },
    { id: 4, name: "Status" }
  ];
  const datas = [
    {
      id:1,
      customer: "John Doe",
      orderNo: "98657",
      amount: "$123.45",
      status: "Delivered",
      avatar: Avatar3
    },
    {
      id:2,
      customer: "Wade Warren",
      orderNo: "12654",
      amount: "$178.25",
      status: "Delivered",
      avatar: Avatar4
    },
    {
      id:3,
      customer: "Guy Hawkins",
      orderNo: "98346",
      amount: "$209.13",
      status: "Cancelled",
      avatar: Avatar5
    },
    {
      id:4,
      customer: "Kristin Watson",
      orderNo: "75628",
      amount: "$155.89",
      status: "Pending",
      avatar: Avatar6
    },
    {
      id:5,
      customer: "Cody Fisher",
      orderNo: "23745",
      amount: "$122.98",
      status: "Delivered",
      avatar: Avatar7
    },
  ];
  // States
  const [tableHeader, setTableHeader] = useState(headers);
  const [tableDatas, setTableDatas] = useState(datas);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Profit", "Loss"],
        datasets: [
          {
            data: [75, 25],
            backgroundColor: ["#7293ff", "#39497F"],
            borderWidth: 0, // Remove the border
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        cutout: "70%", // Adjust the thickness of the chart
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const dataBar = {
    labels: [5, 9, 11, 13, 15, 17, 19,21,23,25],
    datasets: [
      {
        data: [1, 5, 2, 6, 14, 1, 15, 3, 1, 3, 2],
        backgroundColor: "#7293ff",
        borderColor: "rgba(75, 192, 192, 0)",
        borderWidth: 0,
        borderRadius: 15,
      },
    ],
  };

  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false, // Allow height to be adjusted
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
    layout: {
      padding: {
        top: 0, // Adjust the top padding to reduce extra space
        bottom: 0, // Optional: Adjust if needed
        left: 0, // Optional: Adjust if needed
        right: 0, // Optional: Adjust if needed
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Show grid lines on the x-axis
        },
      },
      y: {
        grid: {
          display: true, // Hide grid lines on the y-axis
          color: "#5D5E5C", // Customize grid line color
        },
        ticks: {
          // Customize y-axis labels
          stepSize: 5,
          callback: function (value, index, values) {
            // Define the custom labels
            const labels = ["0", "5K", "10K", "15K"];
            return labels[index] || null;
          },
        },
        min: 0,
        max: 15,
      },
    },
  };
  return (
    <div>
      <div id="dashboard_container" className="d-flex flex-nowrap">
        {/* Sidebar */}
        <div
          className="bg-dark min vh-100 d-flex flex-column justify-content-between sideNav_Container"
        >
          <div className="bg-dark p-2">
            <ul className="nav nav-pills flex-column mt-1">
              <li className="py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link text-white align-items-center d-flex"
                >
                  <FontAwesomeIcon icon={faDropbox} />
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0 mt-3">
                <a
                  href="#"
                  className="nav-link text-white align-items-center d-flex"
                >
                  <FontAwesomeIcon icon={faHouse} />
                  <span className="ms-3 d-none d-sm-inline sideNav_Items">
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link text-white align-items-center d-flex"
                >
                  <FontAwesomeIcon icon={faChartSimple} />
                  <span className="ms-3 d-none d-sm-inline sideNav_Items">
                    Charts
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link text-white align-items-center d-flex"
                >
                  <FontAwesomeIcon icon={faClipboardCheck} />
                  <span className="ms-3 d-none d-sm-inline sideNav_Items">
                    Billing
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link text-white align-items-center d-flex"
                >
                  <FontAwesomeIcon icon={faWallet} />
                  <span className="ms-3 d-none d-sm-inline sideNav_Items">
                    Wallet
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link text-white align-items-center d-flex"
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                  <span className=" ms-3 d-none d-sm-inline sideNav_Items">
                    Store
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-2 nav nav-pills flex-column mt-4 p-2">
            <li className="py-2 py-sm-0">
              <a
                href="#"
                className="nav-link text-white align-items-center d-flex"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span className=" ms-3 d-none d-sm-inline sideNav_Items">
                  Logout
                </span>
              </a>
            </li>
          </div>
        </div>
        {/* Content */}
        <div className="maincontent_Container">
          {/* Top bar */}
          <div className="d-flex navbar bg-dark">
            <div className="nav_Search_Field_Container">
              <div className="nav_Search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search_Icon"
                />
                <input
                  type="text"
                  disabled
                  placeholder="search"
                  className="nav_Search_Field"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end profile_Gap">
              <div className="d-flex icons_Gap">
                <div className="nav_Icon_Background">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mob_View icon_Color"
                  />
                </div>
                <div className="nav_Icon_Background">
                  <FontAwesomeIcon
                    icon={faGear}
                    className="mob_View icon_Color"
                  />
                </div>
                <div className="nav_Icon_Background">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="mob_View icon_Color"
                  />
                </div>
              </div>
              <div className="profile_Container">
                <img
                  src={Avatar8}
                  alt=""
                  className="profile_Img nav_Icon_Background"
                />
              </div>
            </div>
          </div>
          {/* Main content */}
          <div className="content_Background" style={{ overflowY: "auto" }}>
            <p className="font_24">Dashboard</p>
            {/* Row 1 */}
            <div className="pt-1 d-flex cards_Container">
              <div className="card_Gap cards_Container col-12 col-md-12 col-lg-8">
                <div className="row w-100 m-0">
                  {/* card1 */}
                  <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-1 ">
                    <div className="bg-dark h-100 p-3 cards_container border_Radius5">
                      <div className="basket_Icon_Container">
                        <FontAwesomeIcon
                          icon={faBasketShopping}
                          className="basket_Icon"
                        />
                      </div>
                      <p className="font_12 pt-1 mb-0">Total Orders</p>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <p className="font_24 mb-0">75</p>
                        <div className="d-flex align-items-end container_Icon_Gap">
                          <FontAwesomeIcon
                            icon={faCaretUp}
                            className="up_Basket_Container_Icon"
                          />
                          <p className="font_14 mb-0">3%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card2 */}
                  <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-1  ">
                    <div className=" bg-dark p-3 h-100 cards_container border_Radius5">
                      <div className="shopping_Icon_Container">
                        <FontAwesomeIcon
                          icon={faBagShopping}
                          className="shopping_Icon"
                        />
                      </div>
                      <p className="font_12 pt-1 mb-0">Total Delivered</p>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <p className="font_24 mb-0">70</p>
                        <div className="d-flex align-items-end container_Icon_Gap">
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="down_Basket_Container_Icon"
                          />
                          <p className="font_14Red mb-0">3%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card3 */}
                  <div className="col-12 col-sm-6 col-md-3 col-lg-3  p-1  ">
                    <div className=" bg-dark p-3 h-100 cards_container border_Radius5">
                      <div className="basket_Canceled_Icon_Container">
                        <FontAwesomeIcon
                          icon={faBagShopping}
                          className="basket_Canceled_Icon"
                        />
                      </div>
                      <p className="font_12 pt-1 mb-0">Total Cancelled</p>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <p className="font_24 mb-0">05</p>
                        <div className="d-flex align-items-end container_Icon_Gap">
                          <FontAwesomeIcon
                            icon={faCaretUp}
                            className="up_Basket_Container_Icon"
                          />
                          <p className="font_14 mb-0">3%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card4 */}
                  <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-1 ">
                    <div className="bg-dark p-3 h-100 cards_container border_Radius5">
                      <div className="dollar_Icon_Container">
                        <FontAwesomeIcon
                          icon={faCommentDollar}
                          className="dollar_Icon"
                        />
                      </div>
                      <p className="font_12 pt-1 mb-0">Total Revenue</p>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <p className="font_24 mb-0">$12K</p>
                        <div className="d-flex align-items-end container_Icon_Gap">
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="down_Basket_Container_Icon"
                          />
                          <p className="font_14Red mb-0">3%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card5 */}
              <div className="col-12 col-md-12 col-lg-4 p-1">
                <div className="row bg-dark p-2 h-100 m-0 border_Radius5 dougnut_Chart_Container">
                  <div className="d-flex justify-content-between" style={{minWidth:"250px"}}>
                    <div className="">
                      <p className="font_12 pt-2">Net Profit</p>
                      <p className="font_24 mt-1">$ 6759.25</p>
                      <div className="d-flex align-items-end container_Icon_Gap">
                        <FontAwesomeIcon
                          icon={faCaretUp}
                          className="up_Basket_Container_Icon"
                        />
                        <p className="font_14 mb-0">3%</p>
                      </div>
                    </div>
                    <div className="w-40 d-flex align-items-center">
                      <canvas
                        ref={chartRef}
                        style={{ height: "90px", width: "90px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="mt-3 d-flex cards_Container">
              <div className="card_Gap cards_Container col-12 col-md-12 col-lg-8 p-1">
                <div className="row w-100 m-0 bar_Chart_Container">
                  {/* Card 7 */}
                  <div className="p-3 bg-dark border_Radius5 barchart_Scroll">
                    {/* Continue here */}
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="font_24 mb-0">Activity</p>
                      <div className="barchart_Dropdown">
                        <p className="font_14Regular mb-0">Weekly</p>
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="dropdown_Icon"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <Bar data={dataBar} options={optionsBar}></Bar>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 7 */}
              <div className=" cards_Container col col-md-12 col-lg-4 p-1 ">
                <div className="row w-100 m-0 bg-dark border_Radius5 mobile_View">
                  {/* Row 1 */}
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="card7_Target_Container">
                        <FontAwesomeIcon
                          icon={faLocationCrosshairs}
                          className="basket_Canceled_Icon"
                        />
                      </div>
                      <p className="font_16 mb-0 mx-3">Goals</p>
                    </div>
                    <div className="card7_Arrow_Container">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="icon_Color font_12R"
                      />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex align-items-center">
                      <div className="card7_Dishes_Container">
                        <FontAwesomeIcon
                          icon={faBurger}
                          className="basket_Icon"
                        />
                      </div>
                      <p className="font_16 mb-0 mx-3">Dishes</p>
                    </div>
                    <div className="card7_Arrow_Container">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="icon_Color font_12R"
                      />
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex align-items-center">
                      <div className="card7_Bell_Container">
                        <FontAwesomeIcon
                          icon={faBellConcierge}
                          className="dollar_Icon"
                        />
                      </div>
                      <p className="font_16 mb-0 mx-3">Menus</p>
                    </div>
                    <div className="card7_Arrow_Container">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="icon_Color font_12R"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="mt-3 d-flex cards_Container">
              <div className="card_Gap cards_Container col-12 col-md-12 col-lg-8 p-1">
                <div className="row w-100 m-0">
                  <div className="p-3 bg-dark border_Radius5">
                    <p className="font_24 mb-0">Recent Orders</p>
                    <div className="table_Container w-100">
                      <table className="w-100 mt-2">
                        <thead className="">
                          <tr
                            className="row_Border"
                            style={{ paddingBottom: "5px" }}
                          >
                            {tableHeader.map((header, index) => (
                                <th
                                className={header.name == "Customer" ? "w-30 font_16 mb-0" : "w-23 font_16 mb-0"}
                                key={header.id}
                                style={{
                                  color: "#fff",
                                  paddingBottom: "10px",
                                }}
                              >
                                {header.name}
                              </th>
                            )
                              )
                            }
                          </tr>
                        </thead>
                        <tbody>
                          {tableDatas.map((data, index) => {
                            return (
                              <tr
                              key={data.id}
                                className={
                                  index == tableDatas.length - 1
                                    ? ""
                                    : "row_Border"
                                }
                              >
                                <td
                                  key={data.id}
                                  className="font_14Regular mb-0 "
                                >
                                  <div className="table_Data_height d-flex align-items-center icons_Gap">
                                    <img
                                      src={data.avatar}
                                      alt=""
                                      className="profile_Img nav_Icon_Background"
                                    />
                                    {data.customer}
                                  </div>
                                </td>
                                <td key={data.id} className="font_14Regular mb-0">
                                  <div className="table_Data_height">
                                    {data.orderNo}
                                  </div>
                                </td>
                                <td key={data.id} className="font_14Regular mb-0">
                                  <div className="table_Data_height">
                                    {data.amount}
                                  </div>
                                </td>
                                <td key={data.id} className="font_14Regular mb-0">
                                  <div
                                    className={`${
                                      data.status == "Delivered"
                                        ? "table_Status_Completed"
                                        : "table_Status_Canceled"
                                    }`}
                                  >
                                    {data.status}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_Gap cards_Container col col-md-12 col-lg-4 p-1">
                <div className="row w-100 m-0">
                  <div className="p-3 bg-dark border_Radius5" style={{overflowY:"auto"}}>
                    <p className="font_24 mb-0">Customer's Feedback</p>
                    <div>
                    <div className="d-flex align-items-center icons_Gap mt-3">
                      <img
                        src={Avatar2}
                        alt=""
                        className="profile_Img nav_Icon_Background"
                      />
                      <p className="font_16 mb-0">Jenny Wilson</p>
                    </div>
                    <div className="d-flex mt-2">
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Uncolored"/>
                    </div>
                    <div className="mt-2">
                      <p className="font_12 mb-0">
                        The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
                      </p>
                      {/* <p>
                        We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.
                      </p> */}
                    </div>
                  <div className="row_Border mt-3"></div>
                    </div>
                    <div>
                    <div className="d-flex align-items-center icons_Gap mt-3">
                      <img
                        src={Avatar1}
                        alt=""
                        className="profile_Img nav_Icon_Background"
                      />
                      <p className="font_16 mb-0">Dianne Russell</p>
                    </div>
                    <div className="d-flex mt-2">
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    <FontAwesomeIcon icon={faStar} className="rating_Star_Colored"/>
                    </div>
                    <div className="mt-2">
                      <p className="font_12 mb-0">
                        We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.
                      </p>
                    </div>
                  <div className="row_Border mt-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
