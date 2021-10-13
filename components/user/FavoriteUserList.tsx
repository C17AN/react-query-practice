import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FavoriteUser } from "../../store/user/favoriteUserSlice";

const FavoriteUserList = () => {
  const favoriteUserList = useSelector((state: RootState) => state.favoriteUser.favoriteUserList);

  return (
    <Container>
      <Title>구독중인 유저 목록</Title>
      <ul>
        {favoriteUserList.map(({ id, name, avatar_url }: FavoriteUser) => (
          <li>
            <p>
              {id}번 유저: {name}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  padding: 1rem;
  height: 100%;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

export default FavoriteUserList;
