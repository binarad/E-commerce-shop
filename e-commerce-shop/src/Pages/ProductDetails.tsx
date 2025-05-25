import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ProductPublic } from "../productData.type"
import { Link } from "react-router"
import { Button } from "@mui/material"
function ProductDetails() {
  const params = useParams()
  const [data, setData] = useState<ProductPublic[]>([])



  useEffect(() => {
    // check does product with this name exist in db
    const getList = async () => {
      const req = await fetch("http://127.0.0.1:8000/products/")
      const resp = await req.json()
      setData(resp)
    }

    getList()
  }, [])

  const product = data.find(product => product.name === params.productID)

  if (!product) return (
    <div className="flex flex-col h-1/2 gap-6 items-center justify-center text-3xl font-semibold">
      <h1> Product not found </h1>
      <Link to="/">
        <Button variant="contained" className="w-[150px] h-[40px]">
          Go back
        </Button>
      </Link>
    </div>
  )
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full text-3xl">
      <h1>
        ProductDetails: {params.productID}
      </h1>
    </div>
  )
}

export default ProductDetails
