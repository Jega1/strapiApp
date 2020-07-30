import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import api from "../utils/api";
import Books from "../components/books";
import Users from "../components/users";

const Home = (props) => {
  return (
    <div>
      <Books />
      <Users />
    </div>
  );
};

export default Home;
