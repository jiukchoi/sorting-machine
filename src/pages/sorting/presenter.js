import styled from "styled-components";

const SortingUI = ({ numArr, ascendingArr, descendingArr, handleInputChange, handleSorting }) => {
  return (
    <Wrapper>
      <Section>
        <InputField
          type="text"
          placeholder="정렬할 숫자를 입력하세요. e.g. 1,2,3,4"
          onChange={handleInputChange}
        />
        <StartBtn onClick={() => handleSorting(numArr.current)}>정렬 시작</StartBtn>
        <ResultField>
          <div>오름차순 결과</div>
          <div style={{marginTop: 10}}>{ascendingArr}</div>
        </ResultField>
        <ResultField>
          <div>내림차순 결과</div>
          <div style={{marginTop: 10}}>{descendingArr}</div>
        </ResultField>
      </Section>
    </Wrapper>
  );
};

export default SortingUI;

const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: blanchedalmond;
  padding-bottom: 30px;
`;

const Section = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 30px;
`;

const StartBtn = styled.button`
  margin-top: 50px;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: salmon;
  font-size: 25px;
  cursor: pointer;
  transition: transform 200ms ease-in;
  :hover {
    transform: scale(1.1);
  }
`;

const ResultField = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  padding: 30px;
  background-color: slategray;
  margin-top: 50px;
  color: #fff;
`;
