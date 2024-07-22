import { menu } from '../../../data/data';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const food = menu.find(
    (item: { id: number }) => item.id.toString() === params.id
  );
  
  if (food) {
    return new Response(JSON.stringify(food), { status: 200 });
  } else {
    return new Response(JSON.stringify({ message: "Food not found" }), { status: 404 });
  }
}
