import pool from '../../../lib/db';

//export async function GET(req: Request, res: Response) {
export async function GET() {
    const result = await pool.query('SELECT * FROM articles');
    const data = result.rows;
    //res.json({ result: true, result: result });
    console.log(result.rows);
    /*const singleOne = result.rows.map((row: any) => {
        return row;
    })*/
    return Response.json({ data });
}