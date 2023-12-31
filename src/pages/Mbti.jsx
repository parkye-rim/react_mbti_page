import { useDispatch, useSelector } from "react-redux";
import SkyblueButton from "../components/SkyblueButton";
import styled from "styled-components";
import { check, next } from "../store/modules/mbti";
const Question = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  // survey[0] page =1
  // survey[1] page =2
  const dispatch = useDispatch();
  return (
    <>
      <Question>{survey[page - 1].question}</Question>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(next());
                  dispatch(check(el.result));
                }}
              />
              {index === 0 && (
                <p style={{ fontSize: "2rem", paddingTop: "1rem" }}>VS</p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
