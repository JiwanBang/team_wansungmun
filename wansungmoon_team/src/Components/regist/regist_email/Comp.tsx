import { useRef, useState } from "react";
import InputTextBox from "../../Public/Body/InputBox";
import Button from "../../Public/Body/Button";

const Regist_email = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [location, setLocation] = useState("");
  const [detailloca, setDetailloca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(email + "+" + password + "+" + phoneNum + "+" + nickname);
  };
  return (
    <div className="container">
      <form className="container flex flex-col gap-[0.5rem] items-center">
        <InputTextBox
          title="이메일 주소"
          placeholder="이메일 주소 입력"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <InputTextBox
          title="비밀번호"
          placeholder="영문, 숫자 포함 최소 8자리 이상"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <InputTextBox
          title="닉네임"
          placeholder="닉네임"
          value={nickname}
          onInput={(e) => setNickname(e.target.value)}
        />
        <InputTextBox
          title="휴대폰 번호"
          placeholder="휴대폰 번호"
          value={phoneNum}
          onInput={(e) => setPhoneNum(e.target.value)}
        />

        <div className="btn-wrapper">
          <Button
            textColor="black"
            bgColor="gray"
            onClick={(e) => setModalOpen(true)}
          >
            현재 주소로 찾기
          </Button>
        </div>
        {modalOpen && (
          <div
            className="Modal-container"
            ref="modalBackground"
            onClick={(e) => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}
          >
            <div className="modal-content">
              <p>오늘도 맨덜리에는 안개가 자욱하군요</p>
              <p>날씨 얘기는 하지 마세요 댄버스 부인!!!</p>
            </div>
          </div>
        )}
        <InputTextBox
          title="상세주소"
          placeholder="상세주소"
          value={detailloca}
          onInput={(e) => setDetailloca(e.target.value)}
        />
        <Button
          textColor="black"
          bgColor="gray"
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          회원 가입
        </Button>
      </form>
    </div>
  );
};

export default Regist_email;
