<template>
    <div class="user-page">
        <div class="toolbar">
            <el-input placeholder="名称" class="search-input"></el-input>
            <el-select placeholder="性别" v-model="sexVal" class="search-input">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <el-table :data="userData" border style="width:100%">
            <!-- <el-table-column type="selection" width="55"></el-table-column> -->
            <el-table-column prop="sex" label="性别" width="180" align="center">
                <template slot-scope="scope">
                    <el-tag :type="upSexIcon(scope.row.sex)">{{scope.row.sex}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="名称" width="180" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" width="180" align="center"></el-table-column>
            
            <el-table-column prop="dec" label="描述"></el-table-column>
            <el-table-column prop="" label="操作" width="240" align="center">
                <el-button type="primary" plain>编辑</el-button>
                <el-button type="danger" plain>删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userData: [
                { name: '兔子先生', age: 9 ,sex: '男',dec:'因为天气好，因为天气不好，因为天气刚刚好。'},
                { name: '西二', age: 9 ,sex: '女',dec:'因为天气好，因为天气不好，因为天气刚刚好。'}
            ],
             options: [{
                value: '0',
                label: '男'
                }, {
                value: '1',
                label: '女'
            }],
            sexVal: ''
        }
    },
    computed: {
        'upSexIcon':function(sex){
            return function(sex) {
                 return sex == '男' ? 'success' : 'danger'
            }
           
        }
    }
}
</script>

<style lang="scss" scoped>
.user-page{
    width: 100%;
    .toolbar{
        width: 100%;
        display: flex;
        padding: 15px 0 25px 0;
        .search-input{
            width: 220px;
            margin-right: 10px;
        }
    }
}

</style>