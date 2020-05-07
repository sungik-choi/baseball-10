import React from "react";
import styled from "styled-components";

const TeamCard = ({ name, image }) => {
  return (
    <CardWrap>
      <div>
        {name}
        {image}
      </div>
    </CardWrap>
  );
};

const CardWrap = styled.div``;

export default TeamCard;
