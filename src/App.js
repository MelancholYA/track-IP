import "./styles/index.css";
import Map from "./Map";
import { useEffect, useState } from "react";
function App() {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const getData = async (ip) => {
    let url =
      "https://geo.ipify.org/api/v1?apiKey=at_uqdHTxwpMXJz2rrMMrN1HVcOsgBqL";
    if (ip) url = `${url}&ipAddress=${ip}`;
    const data = await fetch(url);
    const result = await data.json();
    if (data.status !== 200) {
      setLoading(false);
      setError(true);
      return;
    }
    setError(false);
    return result;
  };
  const merge = async (ip) => {
    setLoading(true);
    const res = await getData(ip);
    console.log(res);
    setDetails(res);
    setLoading(false);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    merge(e.target.ip.value);
  };
  useEffect(() => {
    merge();
  }, []);
  console.log(details);
  if (error) return <div className="error">error</div>;
  return (
    <div className="App">
      <div className="header">
        <h1 className="header__title">IP Address Tracker</h1>
        <form className="header__input" onSubmit={formSubmit}>
          <input
            type="text"
            name="ip"
            className="header__input__input"
            placeholder="Search for any IP address..."
          />
          <button className="header__input__buttton">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
              ></path>
            </svg>
          </button>
        </form>
        {loading ? (
          <div className="header__result">
            <div className="header__result__detail">
              <span className="header__result__detail__title">IP Address</span>
              <h1 className="header__result__detail__value">...</h1>
            </div>
            <span className="seperator"></span>
            <div className="header__result__detail">
              <span className="header__result__detail__title">Location</span>
              <h1 className="header__result__detail__value">...</h1>
            </div>
            <span className="seperator"></span>
            <div className="header__result__detail">
              <span className="header__result__detail__title">Timezone</span>
              <h1 className="header__result__detail__value">...</h1>
            </div>
            <span className="seperator"></span>
            <div className="header__result__detail">
              <span className="header__result__detail__title">ISP</span>
              <h1 className="header__result__detail__value">...</h1>
            </div>
          </div>
        ) : (
          <div className="header__result">
            <div className="header__result__detail">
              <span className="header__result__detail__title">IP Address</span>
              <h1 className="header__result__detail__value">{details.ip}</h1>
            </div>
            <span className="seperator"></span>
            <div className="header__result__detail">
              <span className="header__result__detail__title">Location</span>
              <h1 className="header__result__detail__value">
                {details.location.city +
                  "," +
                  details.location.region +
                  "," +
                  details.location.country}
              </h1>
            </div>
            <span className="seperator"></span>
            <div className="header__result__detail">
              <span className="header__result__detail__title">Timezone</span>
              <h1 className="header__result__detail__value">
                UTC {details.location.timezone}
              </h1>
            </div>
            <span className="seperator"></span>
            <div className="header__result__detail">
              <span className="header__result__detail__title">ISP</span>
              <h1 className="header__result__detail__value">{details.isp}</h1>
            </div>
          </div>
        )}
      </div>
      {loading ? (
        <div className="loader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="140"
            fill="#fff"
            viewBox="0 0 135 140"
          >
            <rect width="15" height="120" y="10" rx="6">
              <animate
                attributeName="height"
                begin="0.5s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="120;110;100;90;80;70;60;50;40;140;120"
              ></animate>
              <animate
                attributeName="y"
                begin="0.5s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="10;15;20;25;30;35;40;45;50;0;10"
              ></animate>
            </rect>
            <rect width="15" height="120" x="30" y="10" rx="6">
              <animate
                attributeName="height"
                begin="0.25s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="120;110;100;90;80;70;60;50;40;140;120"
              ></animate>
              <animate
                attributeName="y"
                begin="0.25s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="10;15;20;25;30;35;40;45;50;0;10"
              ></animate>
            </rect>
            <rect width="15" height="140" x="60" rx="6">
              <animate
                attributeName="height"
                begin="0s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="120;110;100;90;80;70;60;50;40;140;120"
              ></animate>
              <animate
                attributeName="y"
                begin="0s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="10;15;20;25;30;35;40;45;50;0;10"
              ></animate>
            </rect>
            <rect width="15" height="120" x="90" y="10" rx="6">
              <animate
                attributeName="height"
                begin="0.25s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="120;110;100;90;80;70;60;50;40;140;120"
              ></animate>
              <animate
                attributeName="y"
                begin="0.25s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="10;15;20;25;30;35;40;45;50;0;10"
              ></animate>
            </rect>
            <rect width="15" height="120" x="120" y="10" rx="6">
              <animate
                attributeName="height"
                begin="0.5s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="120;110;100;90;80;70;60;50;40;140;120"
              ></animate>
              <animate
                attributeName="y"
                begin="0.5s"
                calcMode="linear"
                dur="1s"
                repeatCount="indefinite"
                values="10;15;20;25;30;35;40;45;50;0;10"
              ></animate>
            </rect>
          </svg>
        </div>
      ) : (
        <Map position={[details.location.lat, details.location.lng]} />
      )}
    </div>
  );
}

export default App;
