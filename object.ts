const profile = {
  name: "kevin",
  age: 20,
  coords: {
    lat: 12,
    lng: 30
  },
  setAge(myAge: number): void {
    this.age = myAge;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
