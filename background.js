chrome.action.onClicked.addListener((tab) => {
	if(tab.url.includes("https://codeforces.com/problemset/problem/")) {
	const cur_url = tab.url.split("/");
	let sol_url = "https://codeforces.com/problemset/status/"+cur_url[5]+"/problem/"+cur_url[6];
    chrome.tabs.create({url: sol_url});
}
});