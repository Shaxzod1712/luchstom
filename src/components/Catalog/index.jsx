import React, { useState } from 'react';
import nav from '../../utils/nav';
import { Card2, Button } from '../Generic';
import { Btn, Container, Img, LeftArrow, Pagin, Pagination, RightArrow, Texth1, Texth3, WrapButton } from './style';
import news from '../../assets/ImgCotalog.png'
import NewsId from '../NewsId';
import { useNavigate } from 'react-router-dom';

// const showTotal = (total) => `Total ${total} items`;
 
export const News = () => {
    const navigate=useNavigate()
    let pattern = null;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(nav);
    const [valuse, setValuse] = useState();
    console.log(data, 'daa');
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
    navigate(`/catalog/:${id}`)
}
    return(
        <Container>
            <Img src={news}/>
            <Texth1>Catalog</Texth1>
            <Texth3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum l</Texth3>
            <WrapButton>
              <Button width={'190px'} type={'primary'}>Ophthalmology</Button>
              <Button width={'190px'} >Sterilization and Disinfection</Button>
              <Button width={'190px'} >Patient Life Support</Button>
              <Button width={'190px'} >Stomatology </Button>
              <Button width={'190px'} >Hospital Furniture</Button>
            </WrapButton>
            <Pagin>
                {currentPageIndex?.map((value)=>
                    <Card2 onClick={()=>onSubmit(value.id)} key={value?.id} info={value}/>
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