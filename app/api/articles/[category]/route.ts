import pool from '../../../../lib/db';

//export async function GET(req: Request, res: Response) {
export async function GET(
    request: Request,
    { params }: { params: { category: string } }
) {
    const category = params.category;
    const result = await pool.query(`SELECT * FROM articles WHERE category='${category}'`);
    const data = result.rows;
    //res.json({ result: true, result: result });
    console.log(result.rows);
    /*const singleOne = result.rows.map((row: any) => {
        return row;
    })*/
    return Response.json({ data });
}