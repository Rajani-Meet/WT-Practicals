document.getElementById('github-form').addEventListener('submit',
    function (event) {

        event.preventDefault();
        const username = document.getElementById('username').value;
        fetchGitHubProfile(username);
    });
async function fetchGitHubProfile(username) {
    const url = `https://api.github.com/users/${username}`;
    
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        displayProfile(data);
    } catch (error) {
        document.getElementById('profile').innerHTML =

            `<p>${error.message}</p>`;

        document.getElementById('profile').style.display = 'block';
    }
}
function displayProfile(data) {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
    <h2>${data.name || data.login}</h2>
    <img src="${data.avatar_url}" alt="${data.login}'s avatar"
    
    width="100">
    
    <p><strong>Followers:</strong> ${data.followers}</p>
    <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
    <a href="${data.html_url}" target="_blank">View Profile on
    
    GitHub</a>
    `;
    profileDiv.style.display = 'block'; // Show the profile after data is

    fetched
}