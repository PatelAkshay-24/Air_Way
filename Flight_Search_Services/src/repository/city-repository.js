const {City} = require('../models/index')

class CityRepository{

  //follow to crud opreation in city model

  async createCity({name}){
    try{
      const city = await City.create({name})
      return city;
    }catch(error){
      console.log("somthing went wrong in city repository");
      throw {error};
    }
  }

  async deleteCity(cityId){
    try{
      const city = await City.destroy({
        where:{
          id:cityId
        }
      })
      return true;
    }catch(error){
      console.log("somthing went wrong in city repositoty");
      throw {error};
    }
  }

  async updateCity(cityId,data){
    //we can use also this mettthod
    // try{
    //   const city = await City.update(data,{
    //     where:{
    //       id:cityId
    //     }
    //   })
    //we can also use this method
    const city = await City.findByPk(cityId)
    city.name = data.name;
    await city.save();
    return city;
    }catch(error){
      console.log("somthing went wrong in city repository");
      throw {error};
    }
  
  async getCity(cityId){

    try{

      const city = await City.findByPk(cityId)
      return city;

    }catch(error){
      console.log("somthing went wrong in city repository");
      throw {error};
    }


  }


}

module.exports = CityRepository