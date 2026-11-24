# REACT LIFECYCLE

## React Lifecyle
Dalam react, ada beberapa tahapan dalam siklus hidup sebuah komponen, yaitu:
- mounting: saat komponen pertama kali dirender
- updating: saat komponen diperbarui (re-render) karena perubahan state atau props
- unmounting: saat komponen dihapus dari DOM

Nah dengan menggunakan `React Hooks` kita bisa mengatur siklus hidup komponen tersebut, salah satunya adalah dengan menggunakan `useEffect`.

### useEffect
`useEffect` adalah sebuah `React Hooks` yang memungkinkan kita untuk melakukan side effect sesuai dengan siklus hidup komponen. Side effect yang dimaksud bisa berupa:
- melakukan fetch data dari API
- mengatur timer
- mengatur event listener
- membersihkan resource saat komponen di-unmount

```js
useEffect(setup, dependecies?)
```
[Dokumentasi useEffect](https://react.dev/reference/react/useEffect)

Beberapa contoh penggunaan `useEffect` : 

`re-render`
```js
useEffect(() => {
  // ini akan dijalankan setiap re-render
})
```

`mounted`
```js
useEffect(() => {
  // ini akan dijalankan saat component dirender pertama kali
}, [])
```

`watcher`
```js
useEffect(() => {
  // ini akan dijalankan saat component dirender pertama kali dan ada perubahan pada dependencies
}, [count]) // ini adalah list dependecies yang akan di-watch
```

`unmounted`
```js
useEffect(() => {
  return () => {
    // ini akan dijalankan saat component unmount
    // biasanya digunakan untuk clean up
  }
}, [])
```

## DEMO
### Fetch Data
- siapkan state data dan loading 
- siapkan function untuk fetch data menggunakan axios
- gunakan useEffect mounted untuk melakukan fetch data saat awal component di-render
- set loading menjadi true sebelum get data menggunakan axios
- get data menggunakan axios
- set state data menggunakan data yang didapat dari axios
- finally set loading menjadi false
- gunakan conditional rendering untuk loading
- data siap digunakan

### Login
- siapkan state untuk menampung inputan form
- gunakan setter di event on change per input dalam formnya, value yang digunakan untuk setter berasal dari event.target.value, agar perubahan input dapat diterima
- siapkan function untuk handle submit form axios post
- jangan lupa prevent default saat melakukan submit supaya tidak refresh halaman
- simpan token yang didapat dari response axios ke local storage
- setelah berhasil login, pindah ke halaman home

### Add Data (with authentication)
- siapkan beberapa state untuk menyimpan perubahan input form
- gunakan setter di event on change per input dalam formnya, value yang digunakan untuk setter berasal dari event.target.value, agar perubahan input dapat diterima
- siapkan function untuk menambahkan data ke dalam database , jangan lupa pasang tokennya di headers
- jangan lupa prevent default saat melakukan submit supaya tidak refresh halaman
- setelah berhasil menambahkan data, pindah ke halaman home

### Notification
Untuk memunculkan error message dari response axios ke UI, kita bisa membuat `modal` sendiri atau bisa menggunakan package. Pada demo kali ini kita akan menggunakan [toastify-js](https://apvarun.github.io/toastify-js/)
