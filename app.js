class Device{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
class Brand {
    constructor(name){
        this.name = name;
        this.device = [];
    }

    addBrand(device){
        if(device instanceof Device){
            this.device.push(device);
        }else{
            throw new Error(`This is not an acceptable device: ${device}`);
        }
    }

    describe(){
        return `${this.name} is one of ${this.songs.length} songs.`;
    }
}
class Menu{
    constructor(){
        this.brands = [];
        this.selectedBrands = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while(selection !=0){
            switch(selection){
                case '1': this.createBrand();
                break;
                case '2': this.viewBrand();
                break;
                case '3': this.deleteBrand();
                break;
                case '4': this.displayBrands();
                break;
                default: selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye!");
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) Create a new brand
        2) View brand
        3) Delete a brand
        4) Display all brands
        `);
    }
    showBrandMenuOptions(brandInfo){
        return prompt(`
        0) back
        1)Create a Brand
        2)Delete a Brand
        -----------------
        ${brandInfo}
        `);
    }
}