// import heart from "../../../../imgs/Heart.svg";
// import home from "../../../../imgs/Home.svg";
// import person from "../../../../imgs/person.svg";
// import search from "../../../../imgs/search.svg";
import heart from "../../../../svgs/Heart";
import home from "../../../../svgs/Home";
import person from "../../../../svgs/person";
import search from "../../../../svgs/search";
import OrderList from "./OrderList";
import MenuWrapper from "./MenuWrapper";

interface IProps {
  inactiveElement?: number;
}

const MenuBar = ({ inactiveElement = -1 }: IProps): JSX.Element => {
  const menuArr = [
    [home, "홈", "/home"],
    [search, "검색", "/search"],
    [heart, "즐겨찾기", "/dib"],
    ["orderList"],
    [person, "내 정보", "/info"],
  ];
  const className = "sm:w-6 md:w-12 lg:w-20 xl:w-24";
  const checkClassName = "sm:w-3 md:w-8 lg:w-12 xl:w-16";
  const positionClass = "sm:top-1.5 sm:left-1.5 md:top-2 md:left-2 lg:top-4 lg:left-4 xl:top-4 xl:left-4";
  const fontClassName = "sm:text-xs md:text-sm text-center";
  return (
    <div className="container py-3 flex justify-center border-t-2 mt-2">
      <div className="px-5 w-full">
        <div className="py-3 flex w-full">
          {menuArr.map((item, index) =>
            item[0] !== "orderList" ? (
              <MenuWrapper
                key={index}
                className={className}
                fontClassName={fontClassName}
                isInActive={inactiveElement === index ? true : false}
                svg={item[0] as JSX.Element}
                text={item[1] as string}
                path={inactiveElement !== index ? (item[2] as string) : ""}
              />
            ) : (
              <OrderList
                key={index}
                isInActive={inactiveElement === index ? true : false}
                className={className}
                fontClassName={fontClassName}
                checkClassName={checkClassName}
                positionClass={positionClass}
                path={inactiveElement !== index ? "orderList" : ""}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
