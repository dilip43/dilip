const data = [
	{
		Gender: "Male",
		HeightCm: 171,
		WeightKg: 96,
	},
	{
		Gender: "Male",
		HeightCm: 161,
		WeightKg: 85,
	},
	{
		Gender: "Male",
		HeightCm: 180,
		WeightKg: 77,
	},
	{
		Gender: "Female",
		HeightCm: 166,
		WeightKg: 62,
	},
	{
		Gender: "Female",
		HeightCm: 150,
		WeightKg: 70,
	},
	{
		Gender: "Female",
		HeightCm: 167,
		WeightKg: 82,
	},
];

let overWeight = 0;

function BMI(x) {
	x.bmi = Number((x.WeightKg / (((x.HeightCm / 100) * x.HeightCm) / 100)).toFixed(2));

	if (x.bmi <= 18.4) {
		x.bmiCategory = "Underweight";
		x.healthRisk = "Malnutrition Risk";
	} else if (x.bmi <= 24.9) {
		x.bmiCategory = "Normal Weight";
		x.healthRisk = "Low Risk";
	} else if (x.bmi <= 29.9) {
		x.bmiCategory = "Overweight";
		x.healthRisk = "Enhanced Risk";
		overWeight++;
	} else if (x.bmi <= 34.9) {
		x.bmiCategory = "Moderatly Obese";
		x.healthRisk = "Medium Risk";
		overWeight++;
	} else if (x.bmi <= 39.9) {
		x.bmiCategory = "Severly Obese";
		x.healthRisk = "High Risk";
		overWeight++;
	} else {
		x.bmiCategory = "Very Severly Obese";
		x.healthRisk = "Very High Risk";
		overWeight++;
	}
}

for (let x of data) {
	BMI(x);
}

console.log("Total Overweight: " + overWeight);
