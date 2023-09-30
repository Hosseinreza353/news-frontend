import React, { Component } from "react";
import { connect } from "react-redux";
import { Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import { getNews } from "../actions/news";
import News from "../components/News";

export class HomeScreen extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this.props.getNews();
  }
  render() {
    return (
      <>
        <Stack gap={2}>
        {this.props.news.map((news) => (
          <>
              <News news={news} />
          </>
        ))}
        </Stack>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news.news,
});

export default connect(mapStateToProps, { getNews })(HomeScreen);
