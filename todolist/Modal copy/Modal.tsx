const subitAssets = () => {
  setList((prevList) => {
    return [
      {
        id: Math.random().toString(),
        name: assets.name,
        amount: assets.amount,
        price: assets.price,
      },
      ...prevList,
    ];
  }),
    setAssetsModal(false);
};

const [list, setList] = useState([]);
