import React from "react";
import data from "./data.json";
import PropTypes from "prop-types";

const PersonalInfo = ({ data }) => (
  <div className="personalInfo">
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

PersonalInfo.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    guid: PropTypes.string,
    balance: PropTypes.string,
    picture: PropTypes.string,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    company: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    age: PropTypes.number,
    range: PropTypes.arrayOf(PropTypes.number),
    isActive: PropTypes.bool,
    email: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

class ShowPersonalInfo extends React.Component {
  state = { selectedCompanyId: "disabled" };

  onSelect = (e) => {
    const selectedCompanyId = e.target.value;
    this.setState({ selectedCompanyId });
  };

  render() {
    const { companies } = this.props;
    const { selectedCompanyId } = this.state;
    const companyData = companies.find((i) => selectedCompanyId === i._id);
    return (
      <>
        <h3>Select person dossier</h3>
        <select value={selectedCompanyId} onChange={this.onSelect}>
          <option key="disabled" disabled value="disabled"></option>
          {companies.map((i) => (
            <option key={i._id} value={i._id}>
              {i._id}
            </option>
          ))}
        </select>
        {companyData && <PersonalInfo data={companyData} />}
      </>
    );
  }
}

const Task = () => {
  return (
    <div>
      <ShowPersonalInfo companies={data} />
    </div>
  );
};

export default Task;
