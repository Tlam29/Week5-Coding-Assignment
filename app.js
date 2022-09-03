class Device{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    describe(){
        return `$(this.name) made its debut in $(this.year).`
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
        return `${this.name} is one of ${this.device.length} devices.`;
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
    displayBrand(){
        let brandString = '';
        for(let i = 0; i < this.brands.length; i++){
            brandString += i + ')' + this.brands[i].name + '\n';
        }
        alert(brandString);
    }
    displayDevices(){
        let deviceString = '';
        for(let i = 0; i < this.devices; i++){
            deviceString += i = ')' + this.device[i].name + '\n';
        }
        alert(deviceString);
    }
    createBrand(){
        let name = prompt('Enter name of the brand:');
        this.brands.push(new Brand(name));
    }
    deleteBrand(){
        let index = prompt('Enter the index of the Brand that you want to delete:');
        if (index > -1 && index < this.brands.length){
            this.brands.splice(index, 1);
        }
    }
    viewBrand(){
        let index = prompt('Enter the index of which Brand you would like to see:');
        if (index > -1 && index < this.brands.length){
            this.selectedBrands = this.brands[index];
            let description = "Brand Name: " + this.selectedBrands.name + '\n';
        
            for (let i = 0; i < this.selectedBrands.device.length; i++){
                description += i + ')' + this.selectedBrands.device[i].name + '-' + this.selectedBrands.device[i].device + '\n';
            }
        let selection = this.showBrandMenuOptions(description);
        switch (selection){
            case '1':
                this.createBrand();
                break;
            case '2':
                this.deleteBrand();
                break;
        }
      } 
    }
    createDevice(){
        let name = prompt('Enter name of the new Device:');
        let year = prompt('Enter the year the device came out:')
            this.selectedBrands.device.push(new Device(name, year));
    }
    deleteDevice(){
        let index = prompt('Enter the index of the Device you wish to delete:');
        if (index > -1 && index < this.selectedBrands.device.length){
                this.selectedBrands.device.splice(index, 1);
         }
        }
}
let menu = new Menu();
menu.start();