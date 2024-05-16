import pool from '../../../../lib/db';

export async function POST(request: Request) {
    const formData = await request.formData();
    console.log(formData);
    const articleTitle = formData.get('title');
    const articleCategory = formData.get('category');
    const articleText = formData.get('text');

    const result = await pool.query(`INSERT INTO articles (title, text, category)
    VALUES ('${articleTitle}', '${articleText}', '${articleCategory}');`);
    return Response.json({ status: 'ok' })
}