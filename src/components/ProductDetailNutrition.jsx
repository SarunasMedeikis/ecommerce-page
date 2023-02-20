import { useOutletContext } from "react-router-dom";

export default function ProductDetailNutrition() {
  const product = useOutletContext();
  const nutrition = product.nutrition;

  return (
    <>
      <table className="mb-4 table-auto w-1/2 text-left whitespace-no-wrap border">
        <thead>
          <tr>
            <th className="border px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Nutrient
            </th>
            <th className="border px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border  px-4 py-3">Protein</td>
            <td className="border px-4 py-3">{nutrition.protein}g</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Carbohydrates</td>
            <td className="border px-4 py-3">{nutrition.carbs}g</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Fat</td>
            <td className="border px-4 py-3">{nutrition.fat}g</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Salt</td>
            <td className="border px-4 py-3">{nutrition.salt}g</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
