
<template>
<el-container>
  <el-aside style="transition: all .5s" :width="!isCollapse ? '200px' : '64px'">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"  @click="selectMenu('haha')">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header class="header-wrapper">
      <span :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="changeIsCollapse"></span>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>

</template>

<script lang="ts">
  import{ defineComponent, watch, reactive, computed, toRefs }from 'vue';
  import router from '../../router';

  export default defineComponent({

    setup: () => {
      const state = reactive({
        isCollapse: false  // 控制菜单展开 收起
      })
      const changeIsCollapse = ():void => {
        state.isCollapse = !state.isCollapse
      }
    
      const handleOpen = (key:number, keyPath:string):void => {
        console.log(key, keyPath);
      }
      const handleClose = (key:number, keyPath:string):void => {
        console.log(key, keyPath);
      }

      const selectMenu = (name: string): void => {
        console.log(name)
        router.push({name: name})
      }
      return {
        ...toRefs(state),
        handleOpen,
        handleClose,
        changeIsCollapse,
        selectMenu
      }
    }

  })
</script>

<style>
.el-menu-vertical-demo {
  width: 200px;
  height: 100vh;
}

.el-header {
  padding: 0px !important;
}

.header-wrapper {
  height: 100%;
  box-shadow: 24px 4px 29px #ccc;
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.el-icon-s-fold,.el-icon-s-unfold{
  cursor: pointer;
  font-size: 30px;
  padding: 15px;
}
</style>
