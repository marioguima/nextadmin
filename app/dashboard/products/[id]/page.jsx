import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        IPhone 35
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="IPhone 35" />
          <label>Price</label>
          <input type="number" name="price" placeholder="R$ 227.789,78" />
          <label>Stock</label>
          <input type="number" name="14" />
          <label>Color</label>
          <input type="text" name="color" placeholder="silver" />
          <label>Size</label>
          <input type="text" name="size" placeholder="" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="description" id="" rows="10" placeholder="Description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
