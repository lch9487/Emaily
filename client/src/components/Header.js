import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  handleClick() {
    alert(
      "1. 請點選Login With Google\n" +
        "2. 請點選ADD CREDITS，鍵入email、測試用信用卡4242 4242 4242 4242、大於本月之年度/月份：如01/18、任意三碼數字\n" +
        '3. 請點選右下角"+"號\n' +
        "4. 進入所填email之信箱收信並點選yes or no回覆問卷\n" +
        "5. 回到網站等候30秒重新整理頁面即可看到統計資訊"
    );
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <button className="btn right" onClick={this.handleClick}>
            操作提示
          </button>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
