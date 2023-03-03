const ItemsValidate = (title, description, price, code, stock) => {
    try {
      if (!title || !description || !price || !code || !stock ||) return true;
      else if (price < 0) return true;
      else if (stock < 0) return true;
      else return false;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  module.exports = ItemsValidate;