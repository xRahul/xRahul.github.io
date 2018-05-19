---
layout: post
title: Getting Started with Gradle using Java Application
description: This is an introduction to Gradle and a getting started guide for Java developers who want to learn what different parts are and how gradle works!
tags: [java, code, development]
---

{% include image.html path="posts/getting-started-with-gradle-using-java-application/gradle-logo.jpg" path-detail="posts/getting-started-with-gradle-using-java-application/gradle-logo.jpg" alt="Gradle" %}

If you've worked in Java, you probably have encountered Gradle by now, be it in an Android or a Spring Application. Whether you have used Gradle or not, It's good to know one of the leading build tools in the market.

> [Gradle](https://gradle.org/) is the next evolutionary step in [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine)-based build tools. It draws on lessons learned from established tools such as [Ant](https://ant.apache.org/) and [Maven](https://maven.apache.org/) and takes their best ideas to the next level. Following a build-by-convention approach, Gradle allows for declaratively modelling your problem domain using a powerful and expressive domain-specific language (DSL) implemented in [Groovy](http://groovy-lang.org/) instead of XML. Because Gradle is a JVM native, it allows you to write custom logic in the language you're most comfortable with, be it Java or Groovy.<sup>[\[1\]](http://www.drdobbs.com/jvm/why-build-your-java-projects-with-gradle/240168608)</sup>

* Gradle builds are not just for Java applications. You can leverage Gradle to help you build applications in Java, C++, Python or your language of choice.
* You can find [official tutorials](https://docs.gradle.org/current/userguide/userguide.html) for Android, C++, Groovy, Java, JavaScript, Kotlin and Scala under Project Tutorials.


### Install

To install Gradle, please follow the [official docs](https://gradle.org/install/) to get up to date installation instructions. Installation using package manager is recommended.


### Basic concepts

* A Gradle **Build** can have multiple **Projects** which in turn can have multiple **Tasks**
* A `gradle.properties` file is required to configure the build and `settings.gradle` file is required for multi-project builds to tell Gradle which projects to build.
* Gradle supports **Plugins**, which contains dependencies, tasks and configurations(like source location) that can be applied to our build and make Gradle easy to use.


### Features

Check out the categorized [list of features](https://gradle.org/features/) provided by Gradle.

* [Incremental Builds](https://blog.gradle.org/introducing-incremental-build-support)
* [Parallel Execution](https://docs.gradle.org/current/userguide/custom_tasks.html#worker_api)
* [Continuous Execution even After Failures](https://docs.gradle.org/current/userguide/tutorial_gradle_command_line.html#sec:continue_build_on_failure)
* [Transitive Dependencies](https://docs.gradle.org/current/userguide/dependency_management.html#sub:exclude_transitive_dependencies)
* [Version Conflict Resolution](https://docs.gradle.org/current/userguide/dependency_management.html#sec:dependency_resolution)
* [Built-in Support for JVM Code Quality Tools](https://docs.gradle.org/current/userguide/pt05.html)
* [Customizable Logging](https://docs.gradle.org/current/userguide/logging.html#sec:changing_what_gradle_logs)



### Building a Java Application using Gradle

{:.reveal}
{% highlight bash %}
mkdir java-demo && cd java-demo
gradle init --type java-application
{% endhighlight %}

* Gradle comes with a built-in plugin called the [**Build Init Plugin**](https://docs.gradle.org/current/userguide/build_init_plugin.html). You can see the details of building a Java application in the [official docs](https://guides.gradle.org/building-java-applications/).
* It generates the default `main` and `test` folders for the source code along with other configurational files.
* The `build.gradle` file contains *java* and *application* plugins, a class name for the entry point of **jar**, the public Bintray Artifactory repository and some dependencies to help with the development and testing of the application.
* Because the Gradle build used the Application plugin, you can use the `./gradlew run` command to Build, Test and Execute the project.

### Important components of Gradle

#### Gradle Wrapper

This is the recommended way to build a Gradle project. When you initialize a Gradle project, the [gradle wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html) is set up automatically which can be executed just like Gradle as:

{:.reveal}
{% highlight bash %}
./gradlew <task>
{% endhighlight %}

Gradle changes a lot with its upgrades and the old `gradle.build` files might not work for the newer versions. Gradle Wrapper automatically downloads and uses the recommended version of Gradle to execute your tasks.

{:.reveal}
{% highlight bash %}
gradle wrapper
{% endhighlight %}

You have to push the Gradle wrapper files to **Version control** like git, including **jars**, so everyone can use the same wrapper to build your projects
You can **upgrade** the Gradle wrapper via it's CLI to make sure any other optimizations present in the build are also applied.

{:.reveal}
{% highlight bash %}
./gradlew wrapper --gradle-version 4.2.1
{% endhighlight %}


#### Gradle Daemon

* This daemon runs in the background on your system and helps builds run faster by avoiding the expensive bootstrapping process as well as leveraging caching, by keeping data about your project in memory.
* Gradle Daemon is enabled by default starting with Gradle 3.0, so it requires no setup.
* In between builds, it waits idly for the next build. This has the obvious benefit of only requiring Gradle to be loaded into memory once for multiple builds, as opposed to once for each build.
* The Daemon can also leverage caching and can progressively become more optimal with each rebuild to decrease the build times.

Go through the [Gradle CLI Docs](https://docs.gradle.org/current/userguide/command_line_interface.html) to see what else you can do;


### Dependency management with Gradle

This is one of the major feature provided by a build system. Dependency management is a technique for declaring, resolving and using dependencies required by the project in an automated fashion.

There are some widely used public [repositories](https://docs.gradle.org/current/userguide/repository_types.html) of Gradle like `mavenCentral()`, `jcenter()` and `google()`. But you can also define other repositories by url, even the ones secure access via credentials.

There are different [**types of dependencies**](https://docs.gradle.org/current/userguide/dependency_types.html):

{:.reveal}
{% highlight gradle %}
dependencies {
    // Module dependencies
    runtime group: 'org.springframework', name: 'spring-core', version: '2.5'

    // File Dependencies
    runtime files('libs/a.jar', 'libs/b.jar')
    compile files("$buildDir/classes") {
        builtBy 'compile'
    }

    // Project dependencies
    compile project(':shared')
{% endhighlight %}


As Gradle is widely used in Java and Android projects, you can check these links to get a detailed overview. They will give you an idea on how to use compile, runtime or test dependencies among other things:
* [Java configuration via Java plugin](https://docs.gradle.org/current/userguide/java_plugin.html)
* [Android configuration via Android plugin](https://developer.android.com/studio/build/)




{:.reveal}
#### Reference

{:.reveal}
[Gradle - Wikipedia](https://en.wikipedia.org/wiki/Gradle){:target="_blank" rel="noopener noreferrer"}
<br>
[Gradle - Official Docs](https://docs.gradle.org/){:target="_blank" rel="noopener noreferrer"}
<br>
[Gradle Tutorials and Guides](https://gradle.org/guides/){:target="_blank" rel="noopener noreferrer"}
<br>
[Gradle Guides - Building Java Applications](https://guides.gradle.org/building-java-applications/){:target="_blank" rel="noopener noreferrer"}
<br>
[Why Build Your Java Projects with Gradle Rather than Ant or Maven?](http://www.drdobbs.com/jvm/why-build-your-java-projects-with-gradle/240168608){:target="_blank" rel="noopener noreferrer"}