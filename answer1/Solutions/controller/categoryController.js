import axios from "axios";



const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTY2MjkyLCJpYXQiOjE3MjQxNjU5OTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA0MDY5ZjVjLTRhNTItNDEzMi1hNDc5LWU4MGIxZDYxOWNhYyIsInN1YiI6ImFtYW5jaGFuZHJhMjMxMDAxQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkJCRE5JSVQiLCJjbGllbnRJRCI6IjA0MDY5ZjVjLTRhNTItNDEzMi1hNDc5LWU4MGIxZDYxOWNhYyIsImNsaWVudFNlY3JldCI6IkFncFJXWmVmUlhqdmtUU3oiLCJvd25lck5hbWUiOiJBbWFuQ2hhbmRyYSIsIm93bmVyRW1haWwiOiJhbWFuY2hhbmRyYTIzMTAwMUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwNTYwMTAwMDE4In0.CU7yjXxq10J72bu90h7revrcLt_5H_pfy3iEMi8D9d4";


axios.defaults.headers.common["Authorization"] = token;

export const categoryController = async (red, res) => {
  try {
    const data = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,
      {
        headers:{
          'Authorization': `${token}`
        }
      }
    );
    // res.json(data)
    res.status(200).send({
        data,
        success: true,
       });


  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error to get category",
    });
  }
};
