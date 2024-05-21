import pool from '../../../../lib/db';

export async function POST(request: Request) {
    const formData = await request.json();
    const { articleTitle, articleCategory, articleText } = formData;
    console.log(formData);
    /*const articleTitle = formData.get('articleTitle');
    const articleCategory = formData.get('articleCategory');
    const articleText = formData.get('articleText');*/

    const result = await pool.query(`INSERT INTO articles (title, text, category)
    VALUES ('${articleTitle}', '${articleText}', '${articleCategory}');`);
    return Response.json({ result: true })
}