import React, { useState } from 'react';
import datas from '../../utils/datas';
import { Card } from '../Generic';
import { Btn, Container, Img, LeftArrow, Pagin, Pagination, RightArrow } from './style';
import news from '../../assets/newsimg.png'
import NewsId from '../NewsId';
import { useNavigate } from 'react-router-dom';

// const showTotal = (total) => `Total ${total} items`;
 
export const News = () => {
    const navigate=useNavigate()
    let pattern = null;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(datas);
    const [valuse, setValuse] = useState();
    console.log(data, 'da');
    const [countriesPerPage] = useState(12);
  const value = page;
  const range = Math.ceil(data?.length / countriesPerPage);
  switch (true) {
    case range < 7:
      pattern = [...new Array(range)].map((_, i) => i + 1);
      break;
    case value < 4:
      pattern = [1, 2, 3, 4, 5, "...", range];
      break;
    case value > range - 4:
      pattern = [1, "...", range - 4, range - 3, range - 2, range - 1, range];
      break;
    default:
      pattern = [1, '...', value - 1, value, value + 1, "...", range];
  }
  const lastPageIndex = page * countriesPerPage;
  const firstPageIndex = lastPageIndex - countriesPerPage;
  const currentPageIndex = data?.slice(firstPageIndex, lastPageIndex);
  const changeNumber = (n) => {
    if (typeof n === "number" && n > 0 && n <= range) {
      setPage(n);
    }
  };
console.log(currentPageIndex, 'currentPageIndex');
const onSubmit=(id)=>{
    // <NewsId  a={value} />
    navigate(`/news/:${id}`)
}
    return(
        <Container>
            <Img src={news}/>
            <Pagin>
                {currentPageIndex?.map((value)=>
                    <Card onClick={()=>onSubmit(value.id)} key={value?.id} info={value}/>
                )}
            </Pagin>
            <Pagination>
            <Btn disabled={value <= 1} onClick={() => changeNumber(value - 1)}>
              <LeftArrow />
            </Btn>
            {pattern?.map((label) => (
              <Btn key={label} onClick={() => changeNumber(label)}>
                {label >= 0 ? label : '...'}
              </Btn>
            ))}
            <Btn
              disabled={value >= range}
              onClick={() => changeNumber(value + 1)}
            >
              <RightArrow />
            </Btn>
          </Pagination>
        </Container>
    )
//   <>
//     <Pagination size="small" total={500} />
    
//     {/* <Pagination size="small" total={50} showSizeChanger showQuickJumper />
//     <Pagination size="small" total={50} showTotal={showTotal} />
//     <Pagination
//       size="small"
//       total={50}
//       disabled
//       showTotal={showTotal}
//       showSizeChanger
//       showQuickJumper
//     /> */}
//   </>
};

export default News;