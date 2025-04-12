import { getToken } from './authenticate';

async function addToFavourites(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/favourites/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (res.status === 200) {
    return await res.json();
  } else {
    return [];
  }
}

async function removeFromFavourites(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/favourites/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (res.status === 200) {
    return await res.json();
  } else {
    return [];
  }
}

async function getFavourites() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/favourites`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (res.status === 200) {
    return await res.json();
  } else {
    return [];
  }
}

async function addToHistory(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/history/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (res.status === 200) {
    return await res.json();
  } else {
    return [];
  }
}

async function removeFromHistory(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/history/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (res.status === 200) {
    return await res.json();
  } else {
    return [];
  }
}

async function getHistory() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/history`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (res.status === 200) {
    return await res.json();
  } else {
    return [];
  }
}

export {
  addToFavourites,
  removeFromFavourites,
  getFavourites,
  addToHistory,
  removeFromHistory,
  getHistory
};