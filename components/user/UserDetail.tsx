import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { QueryCache, QueryObserver, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { UserInfo } from "../../types/UserType";
import starImage from "../../assets/images/star.png";
import unStarImage from "../../assets/images/unstar.png";
import Image from "next/image";
import { addUser } from "../../store/user/favoriteUserSlice";

const UserDetail = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const fetchedUserData: UserInfo = queryClient.getQueryData("userInfo");
  if (!fetchedUserData) {
    return null;
  }
  const { id, avatar_url, public_repos, company, name }: UserInfo = fetchedUserData;

  const toggleFavoriteStatus = () => {
    dispatch(addUser({ id, name, avatar_url }));
  };

  return (
    <Container>
      <ProfileImage src={avatar_url} alt="profile" />
      <ContentContainer>
        <div>
          <UserName>이름: {name}</UserName>
          <Company>소속: {company}</Company>
        </div>
        <Image src={unStarImage} alt="unstar" layout="fixed" onClick={toggleFavoriteStatus} />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #cdcdcd;
  border-radius: 12px;
  padding: 1rem;
`;

const ProfileImage = styled.img`
  margin-bottom: 0.5rem;
`;

const UserName = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Company = styled.h3`
  color: #666;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default UserDetail;
