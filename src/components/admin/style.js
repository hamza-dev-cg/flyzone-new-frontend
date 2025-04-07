import Styled from "styled-components";
const TableWrapper = Styled.div`
border-radius:8px;
   height: calc(100vh - 252px);
  overflow-y: auto;
  background: #fff;
    table{
  width: 100%;
  border-collapse: collapse;
}
 thead th {
  position: sticky;
  top: 0;
  background: #007bff;
  z-index: 2;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  font-weight: 600;
  color:#fff;
  white-space:nowrap;
}
 tbody td{
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size:12px;
}
  `;

export default TableWrapper;
