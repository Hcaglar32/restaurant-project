import { menu } from '../../../data/data';
export async function GET(
_request: Request,
{ params }: { params: { id: string } }
) {
const food = menu.find(
(item: { id: number }) => item.id.toString
);
return Response.json (food);
}