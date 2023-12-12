export default async function Read(props) {
	const id = props.params.id;
	const resp = await fetch(`http://localhost:9999/topics/${id}`);
	const topic = await resp.json();
	const git = await fetch('https://api.github.com/repos/sunghwan2789/Bible2PPT/issues?state=all&per_page=1');
	const res = await git.json();
	await console.log("get api: ", res);
	return <>
		<h2>{topic.title}</h2>
		{topic.body}
	</>
}