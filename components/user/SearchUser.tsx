import styled from "@emotion/styled";
import React, { useState } from "react";

type SearchUserProps = {
  userName: string | null;
  setUserName: (arg: string) => void;
  onSearch: () => void;
};

const SearchUser = ({ userName, setUserName, onSearch }: SearchUserProps) => {
  return (
    <Container>
      <Label htmlFor="searchUser">검색할 유저 아이디</Label>
      <Input
        id="searchUser"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
      />
      <Button onClick={onSearch}>검색</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 300px;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  border: 1px solid #cdcdcd;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 3rem;
  background-color: #c6e1ec;
  border-radius: 12px;
  border: none;
  outline: none;
`;

export default SearchUser;
