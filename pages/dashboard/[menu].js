import Layout from "../../Components/Layout/Layout";
import Explore from "../../Components/Content/Explore";
import Tools from "../../Components/Content/Tools";
import Maps from "../../Components/Content/Maps";
import Class from "../../Components/Content/Class";
import Setting from "../../Components/Content/Setting";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const router = useRouter();
  const { menu } = router.query;
  const [uri, setUri] = useState("");
  useEffect(() => {
    setUri(menu);
  }, [menu]);
  return (
    <Layout>
      {showMenu(uri)}
    </Layout>
  );
}

const showMenu = (url) => {
  switch (url) {
    case "explore":
      return <Explore menu={url} />;
    case "project":
      return <Tools menu={url} />;
    case "peyimpanan":
      return <Maps menu={url} />;
    case "karir":
      return <Class menu={url} />;
    case "library":
      return <Setting menu={url} />;
    case "link":
      return <Setting menu={url} />;
    case "pinned":
      return <Setting menu={url} />;
    case "pengaturan":
      return <Setting menu={url} />;

    default:
      break
  }
};
