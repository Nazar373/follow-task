import { useState, useEffect } from "react";
import {
  Border,
  Card,
  Container,
  ImageBackground,
  UserImage,
  DataItem,
  DataList,
  GlobalStyle,
  Button,
  FollowingBtn,
} from "./App.styled";
import user from "../images/boy.png";

export const App = () => {
  const followers = JSON.parse(localStorage.getItem("followers"));
  const follow = JSON.parse(localStorage.getItem("following"));
  const [amount, setAmount] = useState(() => {
    return followers || 100500;
  });
  const [following, setFollowing] = useState(() => {
    return follow || false;
  });

  useEffect(() => {
    localStorage.setItem("followers", JSON.stringify(amount));
    localStorage.setItem("following", JSON.stringify(following));
  }, [amount, following]);

  const onClick = () => {
    if (!following) {
      setFollowing(true);
      return setAmount(amount + 1);
    } else {
      setFollowing(false);
      return setAmount(amount - 1);
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <Card>
        <ImageBackground />
        <Border />
        <UserImage src={user} alt="user photo" />
        <DataList>
          <DataItem>777 tweets</DataItem>
          <DataItem>
            {amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "0,")}{" "}
            followers
          </DataItem>
        </DataList>
        {!following ? (
          <Button onClick={() => onClick()}>Follow</Button>
        ) : (
          <FollowingBtn onClick={() => onClick()}>Following</FollowingBtn>
        )}
      </Card>
    </Container>
  );
};

