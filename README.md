visit [Demo](https://todo-app-vuejs-ten.vercel.app)
<!-- # Vue.js -->

<div align="center">
  <h1>Tìm hiểu Vue.js</h1>
</div>

### 1. Vue instance:
 - 	Là 1 thực thể vue hoặc đối tượng vue, dùng  để quản lý thành phần trong trang web hoặc 1 component

### 2. data:
  Là 1 thuộc tính của dối tượng vue, nơi chứa dữ liệu của 1 component
```Javascript
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
};
</script>
```


### 3. methods:
  Là thuộc tính của đối tượng vue, gồm những hàm hỗ trợ, function sẽ được chỉ thị trong component, 1 đối tượng vue sẽ có nhiều method
```Javascript
<script>
export default {
  name: 'comp-search',
  data () {
    return {
      msg: 'Hello'
    }
  },
  methods: {
    onSearch () {
      this.msg = 'Hi'
    }
  }
}
</script>

```

### 4.	Data binding (One-way data binding)
Ràng buộc trường hợp đối với các thuộc tính trong html, cần sử dụng v-bind
```Javascript
<template>
  <a v-bind:href="href"></a>
  <!-- Hoặc -->
  <a :href="href"></a>
</template>

<script>
export default {
  name: 'comp-title',
  data () {
    return {
      href: 'https://v2.vuejs.org/v2/guide'
    }
  }
}
</script>
```

### 5.	Directive:
  Là các thuộc tính trong Vue.js bắt đầu bằng tiền tố v
```Javascript
<template>
  <div>
    <!-- cú pháp đầy đủ -->
    <a v-bind:href="url"> ... </a>

    <!-- cú pháp đầy đủ -->
    <a v-on:click="doSomething"> ... </a>

    <!-- cú pháp rút gọn: dùng dấu hai chấm -->
    <a :href="url"> ... </a>

    <!-- cú pháp rút gọn: dùng kí tự @ -->
    <a @click="doSomething"> ... </a>

  </div>
</template>

```

### 6.	Javacript Expression
Sử dụng biểu thức javascript trong vuejs
```Javascript
<template>
  <div>
    {{ number + 1 }}

    {{ ok ? 'YES' : 'NO' }}

    {{ message.split('').reverse().join('') }}

    <div v-bind:id="'list-' + id"></div>

  </div>
</template>

```

### 7.	Event handling
Sự kiện tác động bởi người dùng: click, mouse moveover,etc…

v-on: lắng nghe 1 sự kiện


### 8.	Event modifiers
1 số hậu tố (postflix) cho directive, được biểu thị bằng 1 dấu chấm

.stop: ngăn sự kiệu từ con lên cha

.prevent: ngăn không cho page bị reload khi submit

.capture

.self

.once

### 9.	Key modifiers
thường sử dụng cho ô input

.enter, .tab, .delete, .asc, .space, .up, .down, .left, .right, …

```Javascript
<template>
  <div>
    <!-- cú pháp đầy đủ -->
    <input v-on:keyup.enter="submit">

    <!-- cú pháp đầy đủ -->
    <input v-on:keyup.page-down="onPageDown">
  </div>
</template>

```

### 10.	Computed
Là 1 thuộc tính cúa đối tượng vue, mỗi computed sẽ có nhiều thuộc tính bên trong, mỗi thuộc tính sẽ là 1 function, function được tính toán dựa trên dữ liệu có sẵn từ đối tượng vue, nơi xử lý dự liệu trên vue, computed không nhận tham số và bắt buộc trả  về 1 giá trị

So sánh với methods:
  - đối với methods, nó sẽ là 1 hàm, nên trong template sẽ là 1 lời gọi hàm {{ functionA() }}, khi có sự thay đổi từ đối tượng vue, vuejs sẽ render lại template, vì là 1 lời gọi hàm nên nó sẽ luôn luôn chạy lại. vậy nên methods sẽ tính toán đối với dữ liệu không giành riêng cho data
  - computed sẽ hoạt động độc lập, sẽ được lưu vào đối tượng vue, chỉ được thực thi khi dữ liệu trong nó bị thay đổi


```Javascript
<template>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  name: 'ShowMessage',
  data(){
    return {
      message: "hững hờ mai thoảng gió đưa hương"
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split(' ').reverse().join(' ')
    }
  }
}
</script>

```

### 11.	Watcher
Lắng nghe sự thay đổi dữ liệu của phần tử cụ thể (UseEffect with dependency)


```Javascript
<template>
  <div>
    <h4>Filter By Status</h4>
    <a-radio-group v-model="value">
      <a-radio v-for="status in mapStatus" :key="status.name" :value="status.value" >
        {{ status.name }}
      </a-radio>
    </a-radio-group>
  </div>
</template>

<script>

export default {
  name: 'filter-by-status',
  data () {
    return {
      value: 'All',
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      alert(newValue)
    }
  }
}
</script>

```

### 12.	Two way binding: ràng buộc dữ liệu 2 chiều, v-model

### 13.	Ràng buộc class, style
```Javascript
<template>
  <div v-bind:class="{ active: isActive }"></div>
</template>

```

### 14.	Render template dùng biểu thức điều kiện: v-if, v-else, v-else-if, v-show
- Đối với v-show: sẽ luôn được render và chứa trong DOM, chỉ bật tắt thuộc tính display


### 15. Vòng lặp trong Vue: v-for, key: để phân biệt các phần tử với nhau
- Khi dung v-for vs v-if, v-for sẽ có độ ưu tiên cao hơn

### 16.	Một số lưu ý khi dùng Object, Array trong vue: https://vi.vuejs.org/v2/guide/list.html#Cac-phuong-thuc-bien-doi

###	17.	Render html: v-html
```Javascript
<template>
  <p v-html="message"></p>
</template>
export default {
  data () {
    return {
      message: '<p>Hello</p>',
    }
  }
}
</script>

```

###	18.	Refs(referent)
Là biến tham chiếu đến các phần tử html mà mình muốn và sử dụng nó trong mục đích của javascript
```Javascript
<template>
  <div class="demo-ref">
    <input ref="fileInputAvatar" type="file" style="display: none;" />

    <h1>DemoRef</h1>
    <button v-on:click="handleClickInputFile" class="avatar">
      Thay đổi Avatar
    </button>
  </div>
</template>

<script>
export default {
  name: "demo-ref",
  data() {
    return {};
  },
  methods: {
    handleClickInputFile(e) {
      this.$refs.fileInputAvatar.click();
    }
  }
};
</script>

```

###	19.	Slot:
Đặt chỗ component với vị trí mong muốn, giống children bên react, để kế thừa, sử lại 1 component


<!-- > A Vue.js project -->
### 20.	Life Cycle: vòng đời của 1 đối tượng vue

- Creating(Khởi tạo đối tượng)  Mouting (Gắn đối tượng với DOM)  Updating(Cập nhật đối tượng trên DOM)  Destroying(Hủy đối tượng)

beforeCreate  created  beforeMount  mouted

- Giai đoạn khởi tạo(Creating)
•	 beforeCreate: khi đối tượng vue được khởi tạo,  khởi tạo ra vòng đời, tại thời điêm này data, event chưa được thiết lập (chưa truy xuất được dữ liệu)
•	created: khi đối tượng vue đã xây dựng xong các hệ thông phản ứng, và toàn bộ dữ liệu đã có thể truy xuất được
  + Vị trí để call API hoặc Ajax
- Giai đoạn gắn đối tượng vào DOM(Mouting)
•	beforeMount: DOM chưa được thiết lập, chưa thể truy cập vào phần tử DOM
•	mouted: cấu trúc html đã được render, cho phép truy cập vào các phần tử của DOM(DOM đã được gắn) (componentDidMount)


- Giai đoạn cập nhật dữ liệu trên DOM(Updating)
•	beforeUpdate: khi đối tượng đã được gán vào DOM, khi có sự thay đổi dữ liệu và trước khi render
•	updated: chạy sau khi beforeUpdate, ứng dụng cho việc cần truy cập DOM sau khi thay đổi thuộc tính
- Giai đoạn hủy đối tượng(Destroying)
•	beforeDestroy: giai đoạn trước khi instance bị hủy, nơi quản lý các tài nguyên xóa tài nguyên, dọn dẹp các compnent, nơi để gọi EventBus.off để tránh data leak
•	destroyed: destroyed các thư viện của bên thứ 3, thời điểm mọi thành phần đã được hủy bỏ hết


###	19.	Event Bus trong Vue.js:
- Việc sử dụng EventBus nhằm tạo ra các global event listener cho toàn bộ ứng dụng. Nó emit ra 1 event nhằm giao tiếp giữa bất kỳ 2 compnent nào có trong ứng dụng(Sender và Receiver)
•	Sender sẽ emit tạo ra 1 global event
•	Receiver sẽ lắng nghe đến khi event được gọi
Note: Nhớ gọi EventBus.off trong beforeDestroy để tránh data leak

```Javascript
import Vue from 'vue';
const EventBus = new Vue();
export default EventBus;
```


<div align="center">
  <h1>Vuex - State Management</h1>
</div>

### 1.	Khái niệm
Là nơi lưu trữ tập trung dữ liệu cho tất cả các component trong 1 ứng dụng, (tương tự Redux bên React – one way data flow)

### 2.	Các thành phần của Vuex
+ 	State: (global state), nơi lữu trữ các dữ liệu dùng chung trong từng component, nơi tất cả các component trong hệ thống có thể truy xuất và lấy data

+ Store: là duy nhất, được khởi tạo cùng với root, làn phần quản lý State, chứa các phương thức cho phép thay đổi state thông qua dispatch hoặc 1 commit

+	Getters: là 1 computed để tính toán data được lưu trên store, xử lí 1 logic chung nào đó mà nhiều component dùng, nơi để lấy data (không nên chỉnh sửa). Cơ chết hoạt dộng giống với computed của vue, sẽ tự động thay đổi và chạy lại khi dữ liệu trong store thay đổi

để lấy nhiều getter 1 lúc, cần sử dụng mapGetters
 ...mapGetters([
        'doneTodosCount',
        'anotherGetter',
         // ...
    ])

+	Mutations: chứa các method để thay đổi giá trị trong State, để kích hoạt 1 mutations cần commit 1 chuỗi String là tên hàm muốn gọi trong mutations, với tham số đầu tiên là state của store
Note: mutaions là 1 hàm đồng bộ(không nên tương tác dữ liệu đến server trong mutations)

+	Actions: cũng giống như mutations nhưng actions không trực tiếp thay đổi state trong store mà sẽ thông qua mutations để thay đổi, chứa các hàm bất đồng bộ để tương tác với serve. Để kích hoạt actions ở 1 component bằng cách dispatch  action  commit  1 mutation (1 action sẽ gọi đến 1 mutation tương ứng)

+	Modules: chia nhỏ module trong store để quản lý

Note: trong 1 action, có thể kích hoạt 1 action khác thông qua context.dispatch()




## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
