import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { GlobalContext, Props } from "../../../../App";
import WritePageUI from "./WritePage.presenter";

const INPUT_CONTENTS = {
  title: "",
  contents: "",
};

export default function WritePage({ navigation }: Props) {
  const { accessToken } = useContext(GlobalContext);
  const [date, setDate] = useState(new Date());
  const [diaries, setDiaries] = useState(INPUT_CONTENTS);
  const [assets, setAssets] = useState({ amount: Number, buy_price: Number });
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [Id, setId] = useState();
  const [assetsModal, setAssetsModal] = useState(false);

  const onPressSubit = async () => {
    try {
      axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      const res = await axios.post(
        "https://the-rich-coding-test1.herokuapp.com/diaries",
        {
          title: diaries.title,
          contents: diaries.contents,
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      const aaa = res.data.id;
      const results = await Promise.all([
        axios.post(
          "https://the-rich-coding-test1.herokuapp.com/diary_assets",
          {
            diary_id: aaa,
            asset_id: Id,
            amount: Number(assets.amount),
            buy_price: Number(assets.buy_price),
          },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        ),

        axios.post(
          "https://the-rich-coding-test1.herokuapp.com/diary_assets",
          {
            diary_id: aaa,
            asset_id: Id,
            amount: Number(assets.amount),
            buy_price: Number(assets.buy_price),
          },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        ),

        axios.post(
          "https://the-rich-coding-test1.herokuapp.com/diary_assets",
          {
            diary_id: aaa,
            asset_id: Id,
            amount: Number(assets.amount),
            buy_price: Number(assets.buy_price),
          },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        ),
      ]);

      navigation.navigate("Main");
      console.log(result.data);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onChangeContent = (text) => {
    setDiaries({ ...diaries, contents: text });
  };
  const onChangeTitle = (text) => {
    setDiaries({ ...diaries, title: text });
  };

  const subitAssets = (invest) => () => {
    setId(invest.id);
    let isExists = false;
    list.forEach((data) => {
      if (data.id === invest.id) isExists = true;
    });
    if (isExists) return alert("!! 이미 담았습니다 !!.");
    setList((list) => {
      return [...list, invest];
    });

    console.log("@@@", list);

    setAssetsModal(false);
  };
  console.log("###", list);

  const onClickPlus = (type) => () => {};

  return (
    <WritePageUI
      navigation={navigation}
      date={date}
      open={open}
      setDate={setDate}
      setOpen={setOpen}
      list={list}
      assetsModal={assetsModal}
      subitAssets={subitAssets}
      setAssetsModal={setAssetsModal}
      onPressSubit={onPressSubit}
      onChangeContent={onChangeContent}
      onChangeTitle={onChangeTitle}
      onClickPlus={onClickPlus}
      setAssets={setAssets}
      assets={assets}
    />
  );
}
let url = "https://the-rich-coding-test1.herokuapp.com/diary_assets";
let parmas = assets.map((data) => ({
  diary_id: aaa,
  asset_id: Number(data.id),
  amount: Number(data.amount),
  buy_price: Number(data.buy_price),
}));

const result = await Promise.all([
  await axios.post(url, parmas),

  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
]);

// ㅅㅣ가ㄴ  마마다  데데이이터  불불러러오오기
useEffect(() => {
  myFuc();
  const interval = setInterval(() => {
    myFuc();
  }, 10000);
  return () => clearInterval(interval);
}, [accessToken]);
