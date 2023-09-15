import styled from "styled-components";
import PinkButton from "../components/PinkButton";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../store/modules/mbti";
const Header = styled.p`
  font-size: 3rem;
`;
const Explanation = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const Result = styled.p`
  font-size: 3rem;
  color: dodgerblue;
`;

const Img = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;
export default function Show() {
  const dispatch = useDispatch();
  const result = useSelector((state) => {
    return state.mbti.mbtiResult;
  });
  const mbtiInfo = useSelector((state) => {
    return state.mbti.explanations[result];
  });
  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explanation>{mbtiInfo.text}</Explanation>
      <Result>{result}</Result>
      <Img src={mbtiInfo.img} alt="" />
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
      {/* <PinkButton text={} clickEvent={}/> */}
    </>
  );
}
