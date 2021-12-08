const BURGERS_TYPES = {
    small: 'small',
    middle: 'middle',
    large: 'large',
  };
  
  const MODIFIERS_TYPES = {
    cheese: 'cheese',
    salad: 'salad',
    potato: 'potato',
    spice: 'spice',
    mayonnaise: 'mayonnaise',
  }
  
  const BURGERS = {
    [BURGERS_TYPES.small]: { price: 50, calories: 20 },
    [BURGERS_TYPES.middle]: { price: 75, calories: 30 },
    [BURGERS_TYPES.large]: { price: 100, calories: 40 },
  };
  
  const MODIFIERS = {
    [MODIFIERS_TYPES.cheese]: { price: 10, calories: 20 },
    [MODIFIERS_TYPES.salad]: { price: 20, calories: 5 },
    [MODIFIERS_TYPES.potato]: { price: 15, calories: 10 },
    [MODIFIERS_TYPES.spice]: { price: 15, calories: 0 },
    [MODIFIERS_TYPES.mayonnaise]: { price: 20, calories: 5 },
  };
  
  function Hamburger(type) {
    this.burger = type ? BURGERS[type] : {};
    this.modifiers = [];
  
    this.addModifiers = (modifierTypes) => {
      if (!modifierTypes || !Array.isArray(modifierTypes) || !modifierTypes.length) return;
  
      const modifiers = modifierTypes.map((modifierType) => MODIFIERS[modifierType]);
      this.modifiers = [...this.modifiers, ...modifiers];
    }
  
    this.getTotalBurgerPrice = () => {
      const stockBurgerPrice = this.burger?.price ?? 0;
      const modifiersPrice = this.modifiers.reduce((acc, modifier) => (acc + (modifier.price || 0)), 0);
      return stockBurgerPrice + modifiersPrice;
    }
  
    this.getTotalBurgerCalories = () => {
      const stockBurgerCalories = this.burger?.calories ?? 0;
      const modifiersCalories = this.modifiers.reduce((acc, modifier) => (acc + (modifier.calories || 0)), 0);
      return stockBurgerCalories + modifiersCalories;
    }
  }
  
  const hamburger = new Hamburger(BURGERS_TYPES.small);
  
  hamburger.addModifiers([MODIFIERS_TYPES.cheese, MODIFIERS_TYPES.salad, MODIFIERS_TYPES.mayonnaise]);
  
  console.log(hamburger.getTotalBurgerPrice());
  console.log(hamburger.getTotalBurgerCalories());